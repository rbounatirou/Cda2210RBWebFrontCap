import { DataLoader } from "../DataLoader.js";
import { TermeData } from "./TermeData.js";

class TermesDataCollection{
    constructor(){
        this.data = [];
    }

    async load(){
        let reponse = await DataLoader.LoadFromSource("/data/termes.json");
        let i = 0;
        this.data = reponse.termes.map(d=> new TermeData(d));
    }

    /* récupére une donnée depuis un identifiannt */
    getDataFromId(id){
        return this.data.filter(d=>d.id == id);
    }
}

export { TermesDataCollection };