import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#121212',
  },
  contentContainer: {
    padding: 15,
    paddingTop: 20,
  },
  profileBox: {
    marginTop:40,
    flexDirection: 'row',
    backgroundColor: '#1F1B24',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  profileIcon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  fullName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E0E0E0',
  },
  userInfo: {
    fontSize: 14,
    color: '#B0B0B0',
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#BB86FC',
    marginRight: 10,
  },
  editButton: {
    backgroundColor: '#BB86FC',
    borderRadius: 5,
    padding: 5,
  },
  horizontalScrollView: {
    marginBottom: 20,
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  smallProfileBox: {
    width: '48%',
    backgroundColor: '#1F1B24',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  smallIcon: {
    marginRight: 10,
  },
  smallTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#BB86FC',
    marginBottom: 5,
  },
  smallUniversity: {
    fontSize: 14,
    color: '#E0E0E0',
  },
  smallCityName: {
    fontSize: 12,
    color: '#B0B0B0',
  },
  smallCourse: {
    fontSize: 14,
    color: '#E0E0E0',
  },
  smallCourseType: {
    fontSize: 12,
    color: '#B0B0B0',
  },
  smallUserType: {
    fontSize: 14,
    color: '#E0E0E0',
  },
  smallTurnoLivre: {
    fontSize: 14,
    color: '#E0E0E0',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#1F1B24',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E0E0E0',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#E0E0E0',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
