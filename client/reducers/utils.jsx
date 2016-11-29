export default function logInformation(state = [], action) {
  switch (action.type) {
  case 'LOG_INFORMATION':
    console.log(action.outputText)
    break
  default:
    return state
  }
  return state
}
