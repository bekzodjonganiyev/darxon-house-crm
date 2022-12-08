import {http} from "../utils/http"

const typeAPI = {
    getType(perPage, page ) {
        return http.get(`/tip`)
    },

    getTypeById(id) {
        return http.get(`/tip/${id}`)
    },

    addType(body) {
        return http.post(`/tip`, body)
    },

    editType(body) {
        return http.put(`/tip`, body)
    },

    deleteType(id) {
        return http.delete(`/tip${id}`)
    }
}

const objectAPI = {
    getObject() {
        return http.get("")
    },

    getObjectById() {
        return http.get("")
    },

    addObject() {
        return http.post("")
    },

    editObject() {
        return http.put("")
    },

    deleteObject() {
        return http.delete("")
    }
}

const houseAPI = {
    getObject() {
        return http.get("")
    },

    getObjectById() {
        return http.get("")
    },

    addObject() {
        return http.post("")
    },

    editObject() {
        return http.put("")
    },

    deleteObject() {
        return http.delete("")
    }
}

const homeAPI = {
    getHome() {
        return http.get("")
    },

    getHomeById() {
        return http.get("")
    },

    addHome() {
        return http.post("")
    },

    editHome() {
        return http.put("")
    },

    deleteHome() {
        return http.delete("")
    }
}

const contractAPI = {
    getContract() {
        return http.get("")
    },

    getContractById() {
        return http.get("")
    },

    addContract() {
        return http.post("")
    },

    editContract() {
        return http.put("")
    },

    deleteContract() {
        return http.delete("")
    }
}

export {
    typeAPI, objectAPI, houseAPI, homeAPI, contractAPI
}