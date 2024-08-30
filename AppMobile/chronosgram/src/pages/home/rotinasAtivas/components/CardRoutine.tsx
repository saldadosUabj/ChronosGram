import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Definindo o tipo para as rotinas de estudo
type StudyRoutine = {
  id: string;
  title: string;
  description: string;
  icon: string;
  creator: string;
  participants: number;
  likes: number;
};

const CardRoutine: React.FC<{ routine: StudyRoutine }> = ({ routine }) => {
  const [likes, setLikes] = useState(routine.likes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Icon name={routine.icon} size={30} color="#BB86FC" />
        <Text style={styles.title}>{routine.title}</Text>
      </View>
      <Text style={styles.description}>{routine.description}</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Criado por: {routine.creator}</Text>
        <Text style={styles.infoText}>Participantes: {routine.participants}</Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.likeButton} onPress={handleLike}>
          <Icon
            name={liked ? 'heart' : 'heart-outline'}
            size={24}
            color={liked ? '#FF6F6F' : '#BBBBBB'}
          />
          <Text style={styles.likesText}>{likes}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.enrollButton}>
          <Text style={styles.buttonText}>Inscreva-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#BB86FC',
  },
  description: {
    fontSize: 14,
    color: '#E0E0E0',
    marginBottom: 10,
  },
  infoContainer: {
    marginBottom: 15,
  },
  infoText: {
    fontSize: 12,
    color: '#BBBBBB',
    marginBottom: 2,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesText: {
    marginLeft: 5,
    color: '#E0E0E0',
  },
  enrollButton: {
    backgroundColor: '#3700B3',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CardRoutine;
