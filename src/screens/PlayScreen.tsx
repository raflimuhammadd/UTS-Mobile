import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Slider from '@react-native-community/slider';

const PlayScreen: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(200); // Example duration

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (value: number) => {
    setCurrentTime(value);
  };

  const handleSliderSlidingComplete = (value: number) => {
    // Implement logic to seek to the new position
    console.log('Seek to:', value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>
            {'<'}
          </Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>
          PLAYING FROM YOUR LIBRARY
        </Text>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreButtonText}>
            ...
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../assets/chicago.jpeg')}
        style={styles.albumCover}
      />
      <View style={styles.songInfo}>
        <Image
          source={require('../../assets/chicago.jpeg')}
          style={styles.artistImage}
        />
        <View style={styles.songDetails}>
          <Text style={styles.songTitle}>If That's What It Takes</Text>
          <Text style={styles.artistName}>Céline Dion</Text>
        </View>
      </View>
      <View style={styles.playerControls}>
        <TouchableOpacity style={styles.repeatButton}>
          <Text style={styles.repeatButtonText}>
            ⟲
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.prevButton}>
          <Text style={styles.prevButtonText}>
            ⏮️
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playPauseButton} onPress={handlePlayPause}>
          {isPlaying ? (
            <Text style={styles.playPauseButtonText}>
              ⏸️
            </Text>
          ) : (
            <Text style={styles.playPauseButtonText}>
              ▶️
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>
            ⏭️
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shuffleButton}>
          <Text style={styles.shuffleButtonText}>
            🔄
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          value={currentTime}
          onValueChange={handleSliderChange}
          onSlidingComplete={handleSliderSlidingComplete}
          minimumValue={0}
          maximumValue={duration}
          step={1}
          minimumTrackTintColor={'#FFC107'}
          maximumTrackTintColor={'#C4C4C4'}
          thumbTintColor={'#FFC107'}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.currentTimeText}>
            {Math.floor(currentTime / 60)}:{String(currentTime % 60).padStart(2, '0')}
          </Text>
          <Text style={styles.durationText}>
            {Math.floor(duration / 60)}:{String(duration % 60).padStart(2, '0')}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
  },
  backButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
    color: '#333',
  },
  headerText: {
    fontSize: 16,
    color: '#333',
  },
  moreButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreButtonText: {
    fontSize: 24,
    color: '#333',
  },
  albumCover: {
    width: 140,
    height: 140,
    borderRadius: 8,
    margin: 16,
  },
  songInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  artistImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  songDetails: {
    flex: 1,
  },
  songTitle: {
    fontSize: 18,
    color: '#333',
  },
  artistName: {
    fontSize: 16,
    color: '#666',
  },
  playerControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  repeatButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  repeatButtonText: {
    fontSize: 24,
    color: '#333',
  },
  prevButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prevButtonText: {
    fontSize: 24,
    color: '#333',
  },
  playPauseButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#FFC107',
  },
  playPauseButtonText: {
    fontSize: 24,
    color: '#333',
  },
  nextButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 24,
    color: '#333',
  },
  shuffleButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shuffleButtonText: {
    fontSize: 24,
    color: '#333',
  },
  sliderContainer: {
    padding: 16,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currentTimeText: {
    fontSize: 16,
    color: '#333',
  },
  durationText: {
    fontSize: 16,
    color: '#666',
  },
});

export default PlayScreen;