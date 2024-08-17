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
      fontSize: 22,
      paddingTop:20,
      paddingBottom: 20,
      textAlign:'center',
      fontFamily:'SpaceMono-Regular'
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
      },
      row:{
        flexDirection:'row'
      },
    result: {
      marginTop: 20,
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    suggestion: {
      marginTop: 10,
      fontSize: 18,
      color: 'orange',
      textAlign: 'center',
    },
    historyTitle: {
      fontSize: 20,
      marginTop: 30,
      marginBottom: 10,
      fontWeight: 'bold',
      textAlign: 'center',
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
    },
    suggestionText: {
      fontSize: 18,
      color: 'orange',
      textAlign: 'center',
      paddingTop:10,
    },
    button:{
        backgroundColor:"red",
        marginTop:20,
        width:'50%',
        alignSelf:"center",
    },
    buttonText:{
        
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
  