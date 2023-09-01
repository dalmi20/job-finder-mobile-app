import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native'
import { Stack, useRouter} from 'expo-router'
import { useRoute } from '@react-navigation/native'
import { Text, SafeAreaView } from 'react-native'
import axios from 'axios'

import { ScreenHeaderBtn,NearbyJobCard } from '../../components'
import { COLORS, icons, SIZES } from '../../constants'
import styles from '../../styles/search'

const allPopularJobs = () => {
    const router = useRouter()
    const route = useRoute()
    const [page, setPage] = useState(1);
    const [results,setResults]=useState([])
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
      
    const handleSearch = async () => {
        setResults([])
        setLoader(true);

        try {
            const options = {
                method: "GET",
                url: `https://jsearch.p.rapidapi.com/search`,
                headers: {
                    "X-RapidAPI-Key": '',
                    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
                },
                params: {
                    query:"Popular jobs",
                    page: page.toString(),
                },
            };

            const response = await axios.request(options);
            setResults(response.data.data);
        } catch (error) {
            console.log(error);
            setError(error)
        }finally{
            setLoader(false);
        }
    };

    const handleCardPress = (item) => {
        router.push(`/job-details/${item.job_id}`);
      };
    
    const handlePagination = (direction) => {
        if (direction === 'left' && page > 1) {
            setPage(page - 1)
            handleSearch()
        } else if (direction === 'right') {
            setPage(page + 1)
            handleSearch()
        }
    }
    useEffect(() => {
        handleSearch()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: "",
                }}
            />

            <FlatList
                data={results}
                renderItem={({ item }) => (
                    <NearbyJobCard
                        job={item}
                        handleNavigate={handleCardPress}
                    />
                )}
                keyExtractor={(item) => item.job_id}
                contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }} 
                 ListHeaderComponent={() => (
                    <>
                    <View style={styles.container}>
                            <Text style={styles.searchTitle}>Popular Job Opportunities</Text>
                        </View>
                        <View style={styles.loaderContainer}>
                            {loader ? (
                                <ActivityIndicator size='large' color={COLORS.primary} />
                            ) : error && (
                                <Text>Oops something went wrong</Text>
                            )}
                        </View>
                    </>
                
                )}
                ListFooterComponent={() => (
                    <View style={styles.footerContainer}>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('left')}
                        >
                            <Image
                                source={icons.chevronLeft}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={styles.paginationTextBox}>
                            <Text style={styles.paginationText}>{page}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('right')}
                        >
                            <Image
                                source={icons.chevronRight}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            /> 
            
        </SafeAreaView>
    )
}

export default allPopularJobs