import { db, collection, addDoc, doc } from "../config/firebase.config";
import { query, where, onSnapshot } from "firebase/firestore";


// add Income
export const addIncome = async (incomeData) => {
    try {

        const docRef = await addDoc(collection(db, "income"), incomeData)
        console.log('add income successfully...');

    }
    catch (error) {
        console.log('add income error...', error);
    }
}

// get income

export const getIncome = () => {

    try {

        const q = query(collection(db, "income"), where("state", "==", "CA"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const cities = [];
            querySnapshot.forEach((doc) => {
                cities.push(doc.data().name);
            });
            console.log("Current cities in CA: ", cities.join(", "));
        });

    } catch (error) {

        console.log(error,'fetch me error ');
        
    }

}