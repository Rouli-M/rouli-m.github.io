export default class ProjectData {
    id: string;
    name: string;
    htmlLinks: string;
    htmlShortDescription: string;
    htmlFullDescription: string;
    iconUrl: string; // used as thumnail
    isWide: boolean; // thumbnail will take 2 cols in the grid view
    isHigh: boolean; // thumbnail will take 2 rows in the grid view
    hasDetails: boolean;

    constructor(id: string, name: string, iconUrl: string, htmlLinks: string, htmlShort: string, htmlFull: string, accentColor = "#000000", isHigh = false, isWide = false, hasDetails=false){
        this.id = id;
        this.name = name;
        this.htmlLinks = htmlLinks;
        this.htmlShortDescription = htmlShort;
        this.htmlFullDescription = htmlFull;
        this.iconUrl = iconUrl;
        this.isHigh = isHigh;
        this.isWide = isWide;
        this.hasDetails = hasDetails;
    }
}
