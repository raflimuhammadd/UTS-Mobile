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
    console.log('Seek to:', value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>NOW PLAYING..</Text>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreButtonText}>⋮</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../assets/westlife.jpeg')}
        style={styles.albumCover}
      />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>Seasons In The Sun</Text>
        <Text style={styles.artistName}>Westlife</Text>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          value={currentTime}
          onValueChange={handleSliderChange}
          onSlidingComplete={handleSliderSlidingComplete}
          minimumValue={0}
          maximumValue={duration}
          step={1}
          minimumTrackTintColor={'#4A628A'}
          maximumTrackTintColor={'#535353'}
          thumbTintColor={'#4A628A'}
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
      <View style={styles.playerControls}>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlButtonText}>⟲</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlButtonText}>⏮️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.playPauseButton, isPlaying ? styles.pauseButton : styles.playButton]}
          onPress={handlePlayPause}
        >
          <Text style={styles.playPauseButtonText}>{isPlaying ? '⏸️' : '▶️'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlButtonText}>⏭️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlButtonText}>🔄</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 28,
    color: '#fff',
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  moreButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  albumCover: {
    width: 250,
    height: 250,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 30,
  },
  songInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  songTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  artistName: {
    fontSize: 16,
    color: '#b3b3b3',
  },
  sliderContainer: {
    marginBottom: 30,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  currentTimeText: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  durationText: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  playerControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  controlButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButtonText: {
    fontSize: 22,
    color: '#fff',
  },
  playPauseButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A628A',
  },
  playPauseButtonText: {
    fontSize: 32,
    color: '#fff',
  },
  playButton: {
    backgroundColor: 'transparent',
  },
  pauseButton: {
    backgroundColor: 'transparent',
  },
});

export default PlayScreen;
