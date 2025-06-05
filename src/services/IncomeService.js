import { db, collection, addDoc, doc } from "../config/firebase.config";



// add Income
export const addIncome = async (incomeData) => {
    try {

        const docRef = await addDoc(collection(db, "income"),incomeData)
        console.log('add income successfully...');

    }
    catch (error) {
        console.log('add income error...', error);
    }
}