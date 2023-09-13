import arcadeLogo from './assets/images/icon-arcade.svg'
import advancedLogo from './assets/images/icon-advanced.svg'
import proLogo from './assets/images/icon-pro.svg'

export const PLAN = {
  arcade: {
    logoSrc: arcadeLogo,
    title: 'Arcade',
    cost: {
      monthly: 9,
      yearly: 90
    },
    value: 'arcade'
  },
  advanced: {
    logoSrc: advancedLogo,
    title: 'Advanced',
    cost: {
      monthly: 12,
      yearly: 120
    },
    value: 'advanced'
  },
  pro: {
    logoSrc: proLogo,
    title: 'Pro',
    cost: {
      monthly: 15,
      yearly: 150
    },
    value: 'pro'
  }
}

export const ADD_ONS = {
  add_on_multiplayer: {
    title: 'Online service',
    description: 'Access to multiplayer game',
    value: 'multiplayer',
    cost: {
      yearly: 10,
      monthly: 1
    }
  },
  add_on_storage: {
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    value: 'storage',
    cost: {
      yearly: 20,
      monthly: 2
    }
  },
  add_on_profile: {
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    value: 'profile',
    cost: {
      yearly: 20,
      monthly: 2
    }
  }
}
