import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={1400}
    height={400}
    viewBox="0 0 400 160"
    backgroundColor="#fff"
    foregroundColor="#ecebeb"
  >
    <rect x="48" y="8" rx="3" ry="3" width="88" height="88" /> 
    <rect x="48" y="26" rx="3" ry="3" width="52" height="52" /> 
    <rect x="0" y="56" rx="3" ry="3" width="410" height="410" /> 
    <rect x="0" y="72" rx="3" ry="3" width="380" height="380" /> 
    <rect x="0" y="88" rx="3" ry="3" width="178" height="178" /> 
  </ContentLoader>
)

export default Skeleton

