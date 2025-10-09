import React from "react"
import PaginationDot from 'react-native-animated-pagination-dot'
import { View } from 'react-native';

export const Pagination = (props: {page: number, numPages: number}) => {
    return (
        <View style={{alignItems: 'center', marginBottom: 20}}>
        <PaginationDot
            curPage={props.page}
            maxPage={20}
            sizeRatio={1.2}
            activeDotColor={'white'}
            />
        </View>
            
    )
}