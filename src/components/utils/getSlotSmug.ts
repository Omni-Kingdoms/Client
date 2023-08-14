const options = [
  {
    code: 0,
    value: 'Head'
  }, {
    code: 1,
    value: 'Body'
  }, {
    code: 2,
    value: 'Lefthand'
  }, {
    code: 3,
    value: 'Righthand'
  }, {
    code: 4,
    value: 'Pants'
  }, {
    code: 5,
    value: 'Feet'
  }, {
    code: 6,
    value: 'Neck'
  }
]

export default function getSlotSmug(slot: number) {
  return options.find((option) => option.code === slot)?.value;
}