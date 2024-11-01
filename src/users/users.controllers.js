const uuid = require("uuid")
const Users = require("../models/users.models")
const { hashPassword } = require("../utils/crypto")
const Posts = require("../models/posts.model")
const Categories = require("../models/categories.models")

const getAllUsers = async () => {
  const data = await Users.findAll({
    where: {
      status: "active"
    },
    include: [
      {
        model: Posts,
        include: [
          {
            model: Categories
          }
        ],
        attributes: {
          exclude: ['createdAt', 'updatedAt','id']
        }
      }
    ],
    attributes: {
      exclude: ['createdAt', 'updatedAt','password']
    }
  })
  return data
}

const getUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id,
      status: "active"
    },
    include: [
      {
        model: Posts,
        include: [
          {
            model: Categories
          }
        ],
        attributes: {
          exclude: ['createdAt', 'updatedAt','id']
        }
      }
    ],
    attributes: {
      exclude: ['createdAt', 'updatedAt','password']
    }
  })
  return data
}

const createUser = async (data) => {
  const newUser = await Users.create({
    id: uuid.v4(),
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: hashPassword(data.password),
    phone: data.phone,
    birthday: data.birthday,
  })
  return newUser
}

const updateUser = async (id, data) => {
  const result = await Users.update(data, {
    where: {
      id
    }
  })
  return result
}

const deleteUsersById = async (id) => {
  const data = await Users.destroy({
    where: {
      id
    }
  })
  return data
}

const getUserByEmail = async (email) => {
  const data = await Users.findOne({
    where: {
      email,
      status: "active"
    }
  })
  return data
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUsersById,
  getUserByEmail
}


