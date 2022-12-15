import {http} from "../utils/http"

const typeAPI = {
    getType( ) {
        return http.get(`/tip`)
    },

    getTypeById(id) {
        return http.get(`/tip/${id}`)
    },

    addType(body) {
        return http.post(`/tip`, body)
        // // console.log(body)
        // return body
    },

    editType(body, id) {
        return http.put(`/tip/${id}`, body)
    },

    deleteType(id) {
        return http.delete(`/tip/${id}`)
    }
}

const objectAPI = {
    getObject() {
        return http.get(`/object`)
    },

    getObjectById(id) {
        return http.get(`/object/${id}`)
    },

    addObject(body) {
        return http.post(`/object`, body)
    },

    editObject(body, id) {
        return http.put(`/object/${id}`, body)
    },

    deleteObject(id) {
        return http.delete(`/object/${id}`)
    }
}

const houseAPI = {
    getHouse() {
        return http.get(`/dom`)
    },

    getHouseById(id) {
        return http.get(`/dom/${id}`)
    },

    addHouse(body) {
        return http.post(`/dom`, body)
    },

    editHouse(body, id) {
        return http.put(`/dom/${id}`, body)
    },

    deleteHouse(id) {
        return http.delete(`/dom/${id}`)
    }
}

const homeAPI = {
    getHome() {
        return http.get(`/flat`)
    },

    getHomeById(id) {
        return http.get(`/flat/${id}`)
    },

    addHome(body) {
        return http.post(`/flat`, body)
    },

    editHome(body, id) {
        return http.put(`/flat/${id}`, body)
    },

    deleteHome(id) {
        return http.delete(`/flat/${id}`)
    }
}

const contractAPI = {
    getContract() {
        return http.get(`/shartnoma`)
    },

    getContractById(id) {
        return http.get(`/shartnoma/${id}`)
    },

    addContract(body) {
        return http.post(`/shartnoma`, body)
    },

    editContract(body, id) {
        return http.put(`/shartnoma/${id}`, body)
    },

    deleteContract(id) {
        return http.delete(`/shartnoma/${id}`)
    }
}

export {
    typeAPI, objectAPI, houseAPI, homeAPI, contractAPI
}