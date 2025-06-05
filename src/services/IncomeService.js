import { db, collection, addDoc, doc } from "../config/firebase.config";



// add Income
export const addIncome = async (data, userID) => {
    try {

        const docRef = await addDoc(collection(db, "income"), {
            ...data,
            userID,
            createdAt: new Date(),
        });
        console.log('add income successfully...');

    }
    catch (error) {
        console.log('add income error...', error);
    }
}