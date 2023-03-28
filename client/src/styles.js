import {makeStyles} from "@material-ui/core/styles";

//COLOR PALETTE: 4E598C FFFFFF F9C784 FCAF58 FF8C42

export default makeStyles((theme)=>({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        color: 'black',
        fontFamily: 'Bill Corporate Narrow ExtraBold',
        fontWeight: "bold"
    },
    image: {
        marginLeft: '15px'
    },
    [theme.breakpoints.down('sm')]:{
        mainContainer: {
            flexDirection:"column-reverse"
        }
    }
}))