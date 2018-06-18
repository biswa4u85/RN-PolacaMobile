import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  getStartedText: {
    color: '#000',
    fontSize: 22,
  },
  circleImg: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  membersArea: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 15,
    marginRight: 15,
    flexDirection: "row",
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 7,
  },
  memberBox: {
    width: '30%',
    marginRight: 10,
  },
  memberName: {
    fontSize: 11,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  memberBack1: {
    backgroundColor: '#aa1123',
    alignItems: 'center',
    justifyContent: 'center',
  },
  memberBack2: {
    backgroundColor: '#0f6bb8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  memberBack3: {
    backgroundColor: '#e7191b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentTxt: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
  },
  memberTxt: {
    fontSize: 11,
    color: '#fff',
    marginBottom: 5,
  },
  memberImg: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#eee',
  }
});