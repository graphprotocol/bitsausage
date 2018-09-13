import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import styles from './Button.styles'

const Button = ({
  href,
  target,
  text,
  classes,
  variant,
  onClick,
  wrapper,
  classname
}) => (
  <div className={classnames(classes.button, classes[wrapper], classname)}>
    <a
      className={classnames(classes.link, classes[variant])}
      href={href}
      target={target}
      onClick={onClick}
    >
      {text}
    </a>
  </div>
)

export default withStyles(styles)(Button)
