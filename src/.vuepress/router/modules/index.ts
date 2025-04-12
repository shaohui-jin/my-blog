import { frontEndSidebar } from "./frontEnd";
import { nginxSidebar } from "./nginx";
import { javaSidebar } from "./java";
import { tipsSidebar } from "./tips";
import { promotionsSidebar } from "./promotion";
import { designPatternSidebar } from "./designPattern";
import { algorithmSidebar } from "./algorithm";
import { recommendSidebar } from "./recommend";
import { performanceSidebar } from "./performance";

const getFirstRouter = (router) => {
  const _router = Object.values(router)[0][0]
  const _routerKey = Object.keys(router)[0]
  return _routerKey +
    ( _router.children
      ? typeof _router.children[0] === "string"
        ? _router.children[0]
        : _router.children[0].link
      : typeof _router === "string"
          ? _router
          : _router.link
)
}
export {
  frontEndSidebar,
  nginxSidebar,
  javaSidebar,
  tipsSidebar,
  promotionsSidebar,
  designPatternSidebar,
  algorithmSidebar,
  recommendSidebar,
  performanceSidebar,
  getFirstRouter
}
