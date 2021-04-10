import axios from 'axios'
import { API_URL } from '../config'

export const getVideoIndex = () => {
	return axios.get(API_URL)
		.then(
			res => res.data,
			err => err	
		)
}

export const getVideoByName = (fileName) => {
	return axios.get(API_URL+fileName)
		.then(
			res => res,
			err => err	
		)
}
