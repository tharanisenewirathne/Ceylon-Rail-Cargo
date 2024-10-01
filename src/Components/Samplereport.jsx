/*import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: { display: 'table', width: 'auto', borderStyle: 'solid', borderWidth: 1, marginBottom: 15 },
  tableRow: { margin: 'auto', flexDirection: 'row' },
  tableCell: { margin: 'auto', padding: 5 },
});

const Samplereport = ({ data }) => {
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Contact Data</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}><Text>First Name</Text></View>
            <View style={styles.tableCell}><Text>Last Name</Text></View>
            <View style={styles.tableCell}><Text>Email</Text></View>
            <View style={styles.tableCell}><Text>Phone No</Text></View>
            <View style={styles.tableCell}><Text>Description</Text></View>
          </View>
          {data.map((contact, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCell}><Text>{contact.firstName}</Text></View>
              <View style={styles.tableCell}><Text>{contact.lastName}</Text></View>
              <View style={styles.tableCell}><Text>{contact.email}</Text></View>
              <View style={styles.tableCell}><Text>{contact.phoneNo}</Text></View>
              <View style={styles.tableCell}><Text>{contact.description}</Text></View>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
}

export default Samplereport
*/