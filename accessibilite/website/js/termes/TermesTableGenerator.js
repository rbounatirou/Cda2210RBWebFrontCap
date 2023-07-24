import { TermeData } from "./TermeData.js";
import { TermesDataCollection } from "./TermesDataCollection.js";

class TermesTableGenerator{
    /**
     * CONSTRUCTEUR DE LA CLASSE
     * @param {TermesDataCollection} element 
     */
    constructor(collection){
        this.collection = collection;
        this.sectionWhereIsLoad = document.querySelector('#termesMainTable');
    }

    /* Mets à jour l'affichage */
    actualiser(){
        this.sectionWhereIsLoad.innerHTML = "";
        this.sectionWhereIsLoad.appendChild(this.generateTable());

    }


    /* Genere le table */
    generateTable(){
        let table = document.createElement('table');
        table.classList.add('tableaupresentation');
        table.id = "termesTable";
        let caption = document.createElement('caption');
        caption.innerHTML = "Les termes de l'accessibilite";
        table.appendChild(caption);
        table.appendChild(this.generateTHead());
        table.appendChild(this.generateTBody());
        return table;
    }

    /* Genere la ligne d'entete du tableau */
    generateTHead(){
        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        this.collection.data[0].getKeys().forEach(d=>{
            tr.appendChild(this.generateCell(d,'th'));
        });
        thead.appendChild(tr);
        return thead;
    }

    /*
    GENERE LE TBODY
     */
    generateTBody(){
        let tbody = document.createElement('tbody');        
        this.collection.data.forEach(d=>{
            tbody.appendChild(this.generateLine(d));
        });
        return tbody;
    }

    /**
     * GENERE LA LIGNE PAR RAPPORT A UNE DONNEE
     * @param {TermeData} data 
     * @returns 
     */
    generateLine(data){
        let tr = document.createElement('tr');
        data.getValues().forEach(d => {
            tr.appendChild(this.generateCell(d));
        });

        return tr;
    }

    /* GENERE UNE CELLULE ET LA RENVOIE */
    generateCell(value, typecell = 'td'){
        let cell = document.createElement(typecell);
        cell.innerHTML = value;
        return cell;
    }


}

export { TermesTableGenerator };