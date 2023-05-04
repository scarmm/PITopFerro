import React, { useEffect } from 'react';
import { View, Animated } from 'react-native';
import { principas } from './principas';

export default function Skeleton({ visible, children }) {
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
            <View style={principas.containerboxsSkeleton}>
                <View style={principas.boxsSkeleton}>

                    <View style={principas.imgbox1Skeleton}>

                        <View style={principas.imgboxSkeleton}>
                            <Animated.View style={{
                                width: '30%',
                                height: 500,
                                opacity: 0.3,
                                backgroundColor: 'black',
                                transform: [{ translateX: translateX }]
                            }}>

                            </Animated.View>
                        </View>

                    </View>

                    <View style={principas.boxstextSkeleton}>
                        <Animated.View style={{
                            width: '15%',
                            height: 500,
                            opacity: 0.3,
                            backgroundColor: 'black',
                            transform: [{ translateX: translateX2 }]
                        }}>
                        </Animated.View>
                    </View>
                    <View style={principas.boxstext1Skeleton}>
                        <Animated.View style={{
                            width: '90%',
                            height: 500,
                            opacity: 0.3,
                            backgroundColor: 'black',
                            transform: [{ translateX: translateX3 }]
                        }}>
                        </Animated.View>
                    </View>
                </View>
                <View style={principas.boxsSkeleton}>

                    <View style={principas.imgbox1Skeleton}>

                        <View style={principas.imgboxSkeleton}>
                            <Animated.View style={{
                                width: '30%',
                                height: 500,
                                opacity: 0.3,
                                backgroundColor: 'black',
                                transform: [{ translateX: translateX }]
                            }}>

                            </Animated.View>
                        </View>

                    </View>

                    <View style={principas.boxstextSkeleton}>
                        <Animated.View style={{
                            width: '15%',
                            height: 500,
                            opacity: 0.3,
                            backgroundColor: 'black',
                            transform: [{ translateX: translateX2 }]
                        }}>
                        </Animated.View>
                    </View>
                    <View style={principas.boxstext1Skeleton}>
                        <Animated.View style={{
                            width: '90%',
                            height: 500,
                            opacity: 0.3,
                            backgroundColor: 'black',
                            transform: [{ translateX: translateX3 }]
                        }}>
                        </Animated.View>
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



