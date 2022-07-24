import { keyframes } from '~/stitches.config'

export const pulsate = keyframes({
  '0%': { transform: 'scale(0.6, 0.6)', opacity: 0.0 },
  '50%': { opacity: 1.0 },
  '100%': { transform: 'scale(1, 1)', opacity: 0.0 }
})

export const appearFromBottom = keyframes({
  from: {
    opacity: '0',
    transform: 'translateY(20px)'
  },
  to: {
    opacity: '1',
    transform: 'translateY(0)'
  }
})

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96]
}

export const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const easing = [0.6, -0.05, 0.01, 0.99]

export const fadeInUp = {
  initial: {
    y: 40,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
}

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const fade = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: easing
    }
  }
}

export const container = {
  show: {
    transition: {
      staggerChildren: 0.35
    }
  }
}

export const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6
    }
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8
    }
  }
}

export const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.2, ...transition } }
}

export const nextVariants = {
  exit: { x: -100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.2, ...transition } }
}

export const backVariantsSlow = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
}
