import { gql } from "@apollo/client";

const CATEGORY = gql`
query{
  category{
    id
    name
  }
}
`

const RESTAURANT = gql`
query restaurant($categoryId:ID!){
  restaurant(categoryId:$categoryId){
    id
    name
    categoryId
  }
}`

const BRANCHES = gql`
query branches($restaurantId:ID!){
  branches(restaurantId:$restaurantId){
    id
    name
  }
}`

const MENU = gql`
query menu($branchId:ID!){
  menu(branchId:$branchId){
    id
    name
    price
    img
  }
}`

// MUTATIONS 

const createCategory = gql`
mutation name($category:String!){
  createCategory(name:$category){
    id
    name
  }
}
`
const createRestaurant =gql`
mutation createRestaurant($name:String! $categoryId:ID!){
  createRestaurant(name:$name categoryId:$categoryId){
    id
    name
  }
}
`
const createBranches = gql`
mutation createBranches($name:String! $restaurantId:ID!){
  createBranches(name:$name restaurantId:$restaurantId){
    id
    name
  }
}
`
const createMenu = gql`
mutation createMenu($name:String! $price:String! $img:String! $branchId:ID!){
  createMenu(name:$name  price:$price  img:$img branchId:$branchId){
    id
    name
    price
    img
  }
}
`

export  {
  CATEGORY,
  RESTAURANT,
  BRANCHES,
  MENU,
  createCategory,
  createRestaurant,
  createBranches,
  createMenu
}