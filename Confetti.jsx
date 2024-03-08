import ConfettiCannon from 'react-native-confetti-cannon';
import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

const Confetti = () => {
    const [isBlast, setIsBlast] = useState(false);
    const confettiRef = useRef(null);
    const confettiRefSec = useRef(null);

    const handleBlast = () => {
        setIsBlast(true);
        confettiRef.current?.play(0);
        confettiRefSec.current?.play(1);
    };

    const handleBack = () => {
        setIsBlast(false);
    }

    return (
        <View style={styles.container}>
            {
                !isBlast && <Pressable style={{ paddingVertical: 10, paddingHorizontal: 30, borderColor: "#FF7D87", borderWidth: 1, borderRadius: 50 }} onPress={handleBlast}>
                    <Text style={{ fontSize: 30, fontFamily: 'cinzel', color: "#FF7D87" }}>Fireworks</Text>
                </Pressable>
            }

            {isBlast && (
                <>
                    <Text style={{ fontFamily: 'kaushanScript', fontSize: 35, color: "#FF3268" }}>Congratulations! You did it.</Text>
                    <LottieView
                        ref={confettiRef}
                        source={require('./assets/confetti/Animation - 1709811570284.json')}
                        autoPlay={true}
                        loop={isBlast ? true : false}
                        style={styles.lottie}
                        resizeMode='cover'
                    />
                    <LottieView
                        ref={confettiRefSec}
                        source={require('./assets/confetti/Animation - 1709820879676.json')}
                        autoPlay={true}
                        loop={isBlast ? true : false}
                        style={styles.lottie}
                        resizeMode='cover'
                    />
                    <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 30, borderColor: "#FF7D87", borderWidth: 1, borderRadius: 50, zIndex: 50, marginTop: 20 }} onPress={handleBack}>
                        <Text style={{ fontSize: 30, fontFamily: 'cinzel', color: "#FF7D87" }}>Back</Text>
                    </TouchableOpacity>
                </>
            )}


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lottie: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
        pointerEvents: 'none',
    },
});

export default Confetti;
