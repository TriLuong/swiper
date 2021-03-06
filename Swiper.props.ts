import { Object } from "lodash";
import from "prop-types";

export interface SwiperProps {
    animateCardOpacity?: Boolean,
  animateOverlayLabelsOpacity?: Boolean,
  backgroundColor?: string,
  cardHorizontalMargin?: number,
  cardIndex?: number,
  cardStyle?: number | any,
  cardVerticalMargin?: number,
  cards: object[],
  containerStyle?: object,
  children?: any,
  childrenOnTop?: Boolean,
  dragEnd?: Function,
  dragStart?: Function,
  disableBottomSwipe?: Boolean,
  disableLeftSwipe?: Boolean,
  disableRightSwipe?: Boolean,
  disableTopSwipe?: Boolean,
  goBackToPreviousCardOnSwipeBottom?: Boolean,
  goBackToPreviousCardOnSwipeLeft?: Boolean,
  goBackToPreviousCardOnSwipeRight?: Boolean,
  goBackToPreviousCardOnSwipeTop?: Boolean,
  horizontalSwipe?: Boolean,
  horizontalThreshold?: number,
  infinite?: Boolean,
  inputCardOpacityRangeX?: object[],
  inputCardOpacityRangeY?: object[],
  inputOverlayLabelsOpacityRangeX?: object[],
  inputOverlayLabelsOpacityRangeY?: object[],
  inputCardOpacityRange?: object[],
  inputRotationRange?: object[],
  keyExtractor?: Function,
  marginBottom?: number,
  marginTop?: number,
  onSwiped?: Function,
  onSwipedAborted?: Function,
  onSwipedAll?: Function,
  onSwipedBottom?: Function,
  onSwipedLeft?: Function,
  onSwipedRight?: Function,
  onSwipedTop?: Function,
  onSwiping?: Function,
  onTapCard?: Function,
  onTapCardDeadZone?: number,
  outputCardOpacityRangeX?: object[],
  outputCardOpacityRangeY?: object[],
  outputOverlayLabelsOpacityRangeX?: object[],
  outputOverlayLabelsOpacityRangeY?: object[],
  outputRotationRange?: object[],
  outputCardOpacityRange?: object[],
  overlayLabels?: object,
  overlayLabelStyle?: object,
  overlayLabelWrapperStyle?: object,
  overlayOpacityHorizontalThreshold?: number,
  overlayOpacityVerticalThreshold?: number,
  pointerEvents?: oneOf(["box-none", "none", "box-only", "auto"]),
  previousCardDefaultPositionX?: number,
  previousCardDefaultPositionY?: number,
  renderCard: Function.isRequired,
  secondCardZoom?: number,
  showSecondCard?: Boolean,
  stackAnimationFriction?: number,
  stackAnimationTension?: number,
  stackScale?: number,
  stackSeparation?: number,
  stackSize?: number,
  swipeAnimationDuration?: number,
  swipeBackCard?: Boolean,
  topCardResetAnimationFriction?: number,
  topCardResetAnimationTension?: number,
  useViewOverflow?: Boolean,
  verticalSwipe?: Boolean,
  verticalThreshold?: number,
  zoomAnimationDuration?: number,
  zoomFriction?: number,
}

export interface SwiperPropsDefaultProps extends SwiperProps {
  animateCardOpacity: false,
  animateOverlayLabelsOpacity: false,
  backgroundColor: "#4FD0E9",
  cardHorizontalMargin: 20,
  cardIndex: 0,
  cardStyle: {},
  cardVerticalMargin: 60,
  childrenOnTop: false,
  containerStyle: {},
  disableBottomSwipe: false,
  disableLeftSwipe: false,
  disableRightSwipe: false,
  disableTopSwipe: false,
  horizontalSwipe: true,
  horizontalThreshold: width / 4,
  goBackToPreviousCardOnSwipeBottom: false,
  goBackToPreviousCardOnSwipeLeft: false,
  goBackToPreviousCardOnSwipeRight: false,
  goBackToPreviousCardOnSwipeTop: false,
  infinite: false,
  inputCardOpacityRangeX: [-width / 2, -width / 3, 0, width / 3, width / 2],
  inputCardOpacityRangeY: [-height / 2, -height / 3, 0, height / 3, height / 2],
  inputOverlayLabelsOpacityRangeX: [
    -width / 3,
    -width / 4,
    0,
    width / 4,
    width / 3,
  ],
  inputOverlayLabelsOpacityRangeY: [
    -height / 4,
    -height / 5,
    0,
    height / 5,
    height / 4,
  ],
  inputRotationRange: [-width / 2, 0, width / 2],
  keyExtractor: null,
  marginBottom: 0,
  marginTop: 0,
  onSwiped: (cardIndex) => {},
  onSwipedAborted: () => {},
  onSwipedAll: () => {},
  onSwipedBottom: (cardIndex) => {},
  onSwipedLeft: (cardIndex) => {},
  onSwipedRight: (cardIndex) => {},
  onSwipedTop: (cardIndex) => {},
  onSwiping: () => {},
  onTapCard: (cardIndex) => {},
  onTapCardDeadZone: 5,
  outputCardOpacityRangeX: [0.8, 1, 1, 1, 0.8],
  outputCardOpacityRangeY: [0.8, 1, 1, 1, 0.8],
  outputOverlayLabelsOpacityRangeX: [1, 0, 0, 0, 1],
  outputOverlayLabelsOpacityRangeY: [1, 0, 0, 0, 1],
  outputRotationRange: ["-10deg", "0deg", "10deg"],
  overlayLabels: null,
  overlayLabelStyle: {
    fontSize: 45,
    fontWeight: "bold",
    borderRadius: 10,
    padding: 10,
    overflow: "hidden",
  },
  overlayLabelWrapperStyle: {
    position: "absolute",
    backgroundColor: "transparent",
    zIndex: 2,
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlayOpacityHorizontalThreshold: width / 4,
  overlayOpacityVerticalThreshold: height / 5,
  pointerEvents: "auto",
  previousCardDefaultPositionX: -width,
  previousCardDefaultPositionY: -height,
  secondCardZoom: 0.97,
  showSecondCard: true,
  stackAnimationFriction: 7,
  stackAnimationTension: 40,
  stackScale: 3,
  stackSeparation: 10,
  stackSize: 1,
  swipeAnimationDuration: 350,
  swipeBackCard: false,
  topCardResetAnimationFriction: 7,
  topCardResetAnimationTension: 40,
  useViewOverflow: true,
  verticalSwipe: true,
  verticalThreshold: height / 5,
  zoomAnimationDuration: 100,
  zoomFriction: 7,
};