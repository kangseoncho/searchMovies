
export const displayModal = (bool, index) => {
  return {
    type: 'DISPLAY_MODAL',
    payload: bool,
    payloadIndex: index
  }
}