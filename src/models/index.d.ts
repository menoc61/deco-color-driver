import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export enum TransportationModes {
  DRIVING = "DRIVING",
  BICYCLING = "BICYCLING"
}

export enum OrderStatus {
  NEW = "NEW",
  COOKING = "COOKING",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  PICKED_UP = "PICKED_UP",
  COMPLETED = "COMPLETED",
  ACCEPTED = "ACCEPTED",
  DECLINED_BY_COMPANY = "DECLINED_BY_COMPANY"
}

type CourierMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderServiceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ServiceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CompanyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BasketMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BasketServiceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Courier {
  readonly id: string;
  readonly name: string;
  readonly sub?: string | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly transportationMode?: TransportationModes | keyof typeof TransportationModes | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Courier, CourierMetaData>);
  static copyOf(source: Courier, mutator: (draft: MutableModel<Courier, CourierMetaData>) => MutableModel<Courier, CourierMetaData> | void): Courier;
}

export declare class OrderService {
  readonly id: string;
  readonly quantity?: number | null;
  readonly Service?: Service | null;
  readonly orderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderServiceServiceId?: string | null;
  constructor(init: ModelInit<OrderService, OrderServiceMetaData>);
  static copyOf(source: OrderService, mutator: (draft: MutableModel<OrderService, OrderServiceMetaData>) => MutableModel<OrderService, OrderServiceMetaData> | void): OrderService;
}

export declare class Service {
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly shortDescription?: string | null;
  readonly description?: string | null;
  readonly price?: number | null;
  readonly companyID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Service, ServiceMetaData>);
  static copyOf(source: Service, mutator: (draft: MutableModel<Service, ServiceMetaData>) => MutableModel<Service, ServiceMetaData> | void): Service;
}

export declare class Order {
  readonly id: string;
  readonly userID: string;
  readonly Company?: Company | null;
  readonly OrderServices?: (OrderService | null)[] | null;
  readonly status?: OrderStatus | keyof typeof OrderStatus | null;
  readonly Courier?: Courier | null;
  readonly total?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderCompanyId?: string | null;
  readonly orderCourierId?: string | null;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class Company {
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly deliveryFee: number;
  readonly minDeliveryTime: number;
  readonly maxDeliveryTime: number;
  readonly rating?: number | null;
  readonly address: string;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly Services?: (Service | null)[] | null;
  readonly Baskets?: (Basket | null)[] | null;
  readonly adminSub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Company, CompanyMetaData>);
  static copyOf(source: Company, mutator: (draft: MutableModel<Company, CompanyMetaData>) => MutableModel<Company, CompanyMetaData> | void): Company;
}

export declare class Basket {
  readonly id: string;
  readonly userID: string;
  readonly companyID: string;
  readonly BasketServices?: (BasketService | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Basket, BasketMetaData>);
  static copyOf(source: Basket, mutator: (draft: MutableModel<Basket, BasketMetaData>) => MutableModel<Basket, BasketMetaData> | void): Basket;
}

export declare class BasketService {
  readonly id: string;
  readonly quantity: number;
  readonly Service?: Service | null;
  readonly basketID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly basketServiceServiceId?: string | null;
  constructor(init: ModelInit<BasketService, BasketServiceMetaData>);
  static copyOf(source: BasketService, mutator: (draft: MutableModel<BasketService, BasketServiceMetaData>) => MutableModel<BasketService, BasketServiceMetaData> | void): BasketService;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly sub: string;
  readonly address: string;
  readonly lng: number;
  readonly Baskets?: (Basket | null)[] | null;
  readonly Orders?: (Order | null)[] | null;
  readonly lat: number;
  readonly tel?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}