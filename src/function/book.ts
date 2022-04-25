import axios from "axios";

export const getCategories = async () => {
    return await axios.get(
        `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories`
    );
};

export const getBook = async (page: any, size: Number, id: Number) => {
    console.log("func", page, size, id);
    return await axios.get(
        `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?size=${size}&page=${
            page - 1
        }&categoryId=${id}`
    );
};

export const getCount = async (id: Number) => {
    return await axios.get(
        `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${id}`
    );
};
