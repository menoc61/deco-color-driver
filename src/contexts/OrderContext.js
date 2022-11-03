import { createContext, useEffect, useState, useContext } from "react";
import { Auth, DataStore } from "aws-amplify";
import { Courier, Order, User, OrderService } from "../models";
import { useAuthContext } from "./AuthContext";
import { set } from "react-native-reanimated";

const OrderContext = createContext({});

const OrderContextProvider = ({ children }) => {
  const { dbCourier } = useAuthContext();
  const [order, setOrder] = useState();
  const [user, setUser] = useState();
  const [services, setServicees] = useState();

  const fetchOrder = async (id) => {
    if (!id) {
      setOrder(null);
      return;
    }
    const fetchedOrder = await DataStore.query(Order, id);
    setOrder(fetchedOrder);

    DataStore.query(User, fetchedOrder.userID).then(setUser);

    DataStore.query(OrderService, (od) => od.orderID("eq", fetchedOrder.id)).then(
      setServicees
    );
  };

  useEffect(() => {
    if (!order) {
      return;
    }

    const subscription = DataStore.observe(Order, order.id).subscribe(
      ({ opType, element }) => {
        if (opType === "UPDATE") {
          fetchOrder(element.id);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [order?.id]);

  const acceptOrder = async () => {
    // update the order, and change status, and assign the courier
    const updatedOrder = await DataStore.save(
      Order.copyOf(order, (updated) => {
        updated.status = "ACCEPTED";
        updated.Courier = dbCourier;
      })
    );
    setOrder(updatedOrder);
  };

  const pickUpOrder = async () => {
    // update the order, and change status, and assign the courier
    const updatedOrder = await DataStore.save(
      Order.copyOf(order, (updated) => {
        updated.status = "PICKED_UP";
      })
    );
    setOrder(updatedOrder);
  };

  const completeOrder = async () => {
    // update the order, and change status, and assign the courier
    const updatedOrder = await DataStore.save(
      Order.copyOf(order, (updated) => {
        updated.status = "COMPLETED";
      })
    );
    setOrder(updatedOrder);
  };

  return (
    <OrderContext.Provider
      value={{
        acceptOrder,
        order,
        user,
        services,
        fetchOrder,
        pickUpOrder,
        completeOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;

export const useOrderContext = () => useContext(OrderContext);
