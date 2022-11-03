// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TransportationModes = {
  "DRIVING": "DRIVING",
  "BICYCLING": "BICYCLING"
};

const OrderStatus = {
  "NEW": "NEW",
  "COOKING": "COOKING",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED",
  "ACCEPTED": "ACCEPTED",
  "DECLINED_BY_COMPANY": "DECLINED_BY_COMPANY"
};

const { Courier, OrderService, Service, Order, Company, Basket, BasketService, User } = initSchema(schema);

export {
  Courier,
  OrderService,
  Service,
  Order,
  Company,
  Basket,
  BasketService,
  User,
  TransportationModes,
  OrderStatus
};