import styled from 'react-emotion'

const WideText = styled.span(
  ({
    theme: {
      colors,
      space,
      tools: { rem },
    },
    verticalUp,
    verticalDown,
  }) => ({
    display: 'inline-block',
    padding: space.rem.md,
    color: colors.text.blue.light,
    fontWeight: 900,
    fontSize: rem(10),
    textTransform: 'uppercase',
    letterSpacing: rem(4),
    writingMode: (verticalUp || verticalDown) && 'vertical-lr',
    transform: verticalUp && 'rotate(180deg)',
  })
)

export default WideText
