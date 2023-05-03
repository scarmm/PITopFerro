import React, { useEffect } from 'react';
import { View, Animated } from 'react-native';
import { styles } from './PreCompra';

export default function Skeleton2({ visible, children }) {
    const AnimatedValue = new Animated.Value(0);

    useEffect(() => {
        imageAnimated();
        return () => imageAnimated();
    }, []);

    const imageAnimated = () => {
        AnimatedValue.setValue(0)
        Animated.timing(
            AnimatedValue,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }
        ).start(() => {
            setTimeout(() => {
                imageAnimated
            }, 10);
        })
    }
    setInterval(() => {
        imageAnimated();
    }, 1500);


    const translateX = AnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, 150]
    })
    const translateX2 = AnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-30, 170]
    })
    const translateX3 = AnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-60, 80]
    })
    if (visible) {
        return (

            <View style={styles.containerSkeleton}>
                <View style={styles.container1Skeleton}>
                    <View style={styles.imagemSkeleton}>
                        <View
                            style={styles.imagempcSkeleton}
                        >

                            <Animated.View style={{
                                width: '30%',
                                height: 1000,
                                opacity: 0.3,
                                backgroundColor: 'black',
                                transform: [{ translateX: translateX }]
                            }}>

                            </Animated.View>
                        </View>
                    </View>
                    <View style={styles.container2Skeleton}>
                        <View>
                            <View style={styles.texto1Skeleton}>

                                <Animated.View style={{
                                    width: '30%',
                                    height: 100,
                                    opacity: 0.3,
                                    backgroundColor: 'black',
                                    transform: [{ translateX: translateX }]
                                }}>

                                </Animated.View>
                            </View>
                            <View style={styles.texto2Skeleton}>

                                <Animated.View style={{
                                    width: '30%',
                                    height: 100,
                                    opacity: 0.3,
                                    backgroundColor: 'black',
                                    transform: [{ translateX: translateX }]
                                }}>

                                </Animated.View>
                            </View>
                            <View style={styles.texto2Skeleton}>

                                <Animated.View style={{
                                    width: '30%',
                                    height: 100,
                                    opacity: 0.3,
                                    backgroundColor: 'black',
                                    transform: [{ translateX: translateX }]
                                }}>

                                </Animated.View>
                            </View>
                            <View style={styles.texto2Skeleton}>

                                <Animated.View style={{
                                    width: '30%',
                                    height: 100,
                                    opacity: 0.3,
                                    backgroundColor: 'black',
                                    transform: [{ translateX: translateX }]
                                }}>

                                </Animated.View>
                            </View>
                            <View style={styles.texto2Skeleton}>

                                <Animated.View style={{
                                    width: '30%',
                                    height: 100,
                                    opacity: 0.3,
                                    backgroundColor: 'black',
                                    transform: [{ translateX: translateX }]
                                }}>

                                </Animated.View>
                            </View>
                            <View style={styles.texto2Skeleton}>

                                <Animated.View style={{
                                    width: '30%',
                                    height: 100,
                                    opacity: 0.3,
                                    backgroundColor: 'black',
                                    transform: [{ translateX: translateX }]
                                }}>

                                </Animated.View>
                            </View>
                            <View style={styles.texto3Skeleton}>

                                <Animated.View style={{
                                    width: '30%',
                                    height: 100,
                                    opacity: 0.3,
                                    backgroundColor: 'black',
                                    transform: [{ translateX: translateX }]
                                }}>

                                </Animated.View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )


    }
    return (
        <>
            {children}
        </>
    )
}


// 