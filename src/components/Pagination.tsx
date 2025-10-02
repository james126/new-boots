import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface PaginationProps {
  page: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, onPrevPage, onNextPage }) => {
  return (
    <View>
      {/* Dots */}
      <View style={[styles.dotsContainer, { backgroundColor: 'red' }]}>
          {Array.from({ length: totalPages }).map((_, i) => (
              <View
                  key={i}
                  style={[
                      styles.dot,
                      { backgroundColor: i === page ? "black" : "lightgray" },
                  ]}
              />
          ))}
          <Text>Page {page + 1} of {totalPages}</Text>
      </View>

      {/* Prev / Next buttons */}
      <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={onPrevPage} disabled={page === 0}>
              <Text style={[styles.button, page === 0 && styles.disabled]}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onNextPage} disabled={page === totalPages - 1}>
              <Text
                  style={[
                      styles.button,
                      page === totalPages - 1 && styles.disabled,
                  ]}
              >
                  Next
              </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    dotsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 10,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        color: 'red'
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 40,
        marginBottom: 20,
    },
    button: {
        fontSize: 16,
        fontWeight: "bold",
        color: "blue",
    },
    disabled: {
        color: "lightgray",
    },
});

export default Pagination;
