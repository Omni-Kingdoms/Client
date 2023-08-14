const options = [
  {
    code: 0,
    value: 'head'
  }, {
    code: 1,
    value: 'body'
  }, {
    code: 2,
    value: 'lefthand'
  }, {
    code: 3,
    value: 'righthand'
  }, {
    code: 4,
    value: 'pants'
  }, {
    code: 5,
    value: 'feet'
  }, {
    code: 6,
    value: 'neck'
  }
]

export default function getSlotSmug(slot: number) {
  return options.find((option) => option.code === slot)?.value;
}