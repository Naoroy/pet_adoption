import {
  CREATE_PET,
  RETRIEVE_PETS,
  UPDATE_PET,
  DELETE_PET,
} from "./actionTypes";
import PetsService from './petService'

export const createPet = function (name, animal, breed, location, age, sex) {
  return async function (dispatch) {
    try {
      const res = await PetsService.create({
        name, animal, breed, location, age, sex
      })

      dispatch({
        type: CREATE_PET,
        payload: res.data
      })

      return Promise.resolve(res.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export const retrievePets = function () {
  return async function (dispatch) {
    try {
      const res = await PetsService.getAll()

      dispatch({
        type: RETRIEVE_PETS,
        payload: res.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const updatePet = function (id, data) {
  return async function (dispatch) {
    try {
      const res = await PetsService.update(id, data)

      dispatch({
        type: UPDATE_PET,
        payload: data
      })
      return Promise.resolve(res.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export const deletePet = function (id) {
  return async function (dispatch) {
    try {
      await PetsService.delete(id)
      dispatch({
        type: DELETE_PET,
        payload: { id }
      })
    } catch (error) {
      console.log(error)
    }
  }
}


