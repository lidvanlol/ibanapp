import {StyleSheet,StatusBar} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: StatusBar.currentHeight, 
      marginTop:10,
      marginHorizontal:20
      
      
    },
    safeArea: {
        flex: 1,
      },
    label: {
      fontSize: 24,
      paddingTop:20,
      paddingBottom: 20,
      textAlign:'center',
      fontFamily:'Roboto-Bold',
      color:"#1C1C1C"
    },
    input: {
        height: 50,
        borderColor: '#2F2F2F',
        borderWidth: 1,
        paddingHorizontal: 20,
        backgroundColor:'#EEEEEE',
        textTransform:'uppercase',
        borderRadius:10,
        flex:1,
        marginRight:10,
        fontFamily:'Roboto-Regular'
      },
      row:{
        flexDirection:'row'
      },
    result: {
      marginTop: 20,
      fontSize: 24,
      fontFamily:'Roboto-Regular',
      textAlign: 'center',
    },
    suggestion: {
      marginTop: 10,
      fontSize: 18,
      color: 'orange',
      textAlign: 'center',
      fontFamily:'Roboto-Regular'
    },
    historyTitle: {
      fontSize: 23,
      marginTop: 10,
      marginBottom: 10,
      
      textAlign: 'center',
      fontFamily:'Roboto-Bold',
    },
    historyItem: {
      paddingVertical: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      flexDirection:'row',
    },
    historyText: {
      fontSize: 18,
      textAlign: 'center',
      fontFamily:'Roboto-Bold'
    },
    suggestionText: {
      fontSize: 18,
      color: 'orange',
      textAlign: 'center',
      paddingTop:10,
      fontFamily:'Roboto-Regular'
    },
    button:{
        backgroundColor:"red",
        marginTop:20,
        width:'50%',
        alignSelf:"center",
    },
    buttonText:{
        fontFamily:'Roboto-Bold',
        fontSize:16,
        
    },
    clearButton:{
        width:50,
        height:50,
        justifyContent:'center',
        
    },
    clearButtonText:{
        color:"#fff",
        fontSize:20,
       textAlign:'center'
       
        
    },
    deleteButton:{
        
        marginLeft:5,
        justifyContent:"center",
        alignSelf:"center",
        alignContent:"center",
        alignItems:'center',
        backgroundColor:"red",
    },
    deleteButtonText:{
        maxWidth:"90%",
        padding:5,
    },
    deleteButtonIcon:{
        textAlign:'center',
        fontSize:15,

    },
  });
  