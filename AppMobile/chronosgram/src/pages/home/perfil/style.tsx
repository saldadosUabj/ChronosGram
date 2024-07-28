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
  userBox: {
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
    width: 120,
    height: 120,
    borderRadius: 20,
    marginRight: 20, 
  },
  coursePicture: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginRight: 20, 
  },
  typePicture: {
    width: 120,
    height: 120,
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
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#16041B', 
    marginBottom: 10,
  },
  userInfo: {
    fontSize: 16,
    color: '#16041B', 
    marginBottom: 10,
  },
  username: {
    fontSize: 14,
    color: '#16041B',
    marginLeft: 140,
  },
  userBio: {
    fontSize: 14,
    color: '#16041B',
    marginLeft: 160,
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
});

export default styles;