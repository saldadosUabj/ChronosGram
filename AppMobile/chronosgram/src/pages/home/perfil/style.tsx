import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#16041B', 
  },
  contentContainer: {
    marginTop: 20, 
    padding: 20,
  },
  profileBox: {
    backgroundColor: '#73628A', 
    padding: 20,
    borderRadius: 20,
    marginBottom: 1,
    marginTop: 5, 
    flexDirection: 'row', 
    alignItems: 'center',
  },
  profilePicture: {
    width: 82,
    height: 82,
    marginBottom: 10,
    borderRadius: 50,
    marginRight: 20, 
  },
  logoPicture: {
    width: 82,
    height: 82,
    borderRadius: 20,
    marginRight: 20, 
  },
  coursePicture: {
    width: 82,
    height: 82,
    borderRadius: 20,
    marginRight: 20, 
  },
  typePicture: {
    width: 82,
    height: 82,
    borderRadius: 20,
    marginRight: 20, 
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameAndButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Alinha o nome e o botão na mesma linha
    marginBottom: 10, // Adiciona algum espaço abaixo se necessário
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#16041B', 
  },
  userInfo: {
    fontSize: 16,
    color: '#16041B', 
    marginBottom: 10,
  },
  username: {
    fontSize: 14,
    color: '#16041B',
  },
  university: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#16041B',
    marginTop: 5, 
  },
  cityName: {
    fontSize: 16,
    color: '#16041B',
    marginTop: 5,
    flexShrink: 1, 
  },
  course: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#16041B', 
    marginTop: 5, 
  },
  courseType: {
    fontSize: 16,
    color: '#16041B', 
    marginTop: 5,
    flexShrink: 1, 
  },
  userType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#16041B', 
    marginTop: 5, 
  },
  turnoLivre: { 
    fontSize: 16,
    color: '#16041B', 
    marginTop: 5,
    flexShrink: 1, 
  },
  editButton: {
    backgroundColor: '#16041B',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  editButtonIcon: {
    width: 20,
    height: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default styles;