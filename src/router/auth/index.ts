import { NavigationGuardNext, Route } from "vue-router";

/**
 * 로그인 되어 있는 사용자의 경우 해당 기업의 메인으로 돌려보냄
 * 로그인 되어 있지 않은 사용자의 경우에만 통과 가능함
 * @param to
 * @param from
 * @param next
 * @constructor
 */
export const AllNavigationGuard = (
  to: Route,
  from: Route,
  next: NavigationGuardNext
) => {
  next();
};

/**
 * 인증이 완료된 사용자만 해당 가드를 통과할 수 있음
 * 인증이 되어있지 않는 사용자의 경우에 로그인 페이지로 돌려보냄
 * 만약 접속하려고 했던 페이지가 등록된 회사의 경우에는 해당 회사의 로그인 페이지로 보냄
 * 그렇지 않는 경우에는 전체 로그인 페이지로 돌려보냄
 * @param to
 * @param from
 * @param next
 * @constructor
 */
export const AuthenticationGuard = (
  to: Route,
  from: Route,
  next: NavigationGuardNext
) => {
  next();
};

/**
 * 해당 가드는 AuthenticationGuard 의 기능을 포함하며 추가로 해당 사용자가 관리자인지 아닌지 확인함
 * admin 관리자의 경우에는 정상적으로 접근할 수 있지만
 * manage 등급의 관리자는 이전 페이지로 다시 돌려보냄
 * @param to
 * @param from
 * @param next
 * @constructor
 */
export const AuthenticationAndOnlyAdminGuard = (
  to: Route,
  from: Route,
  next: NavigationGuardNext
) => {
  next();
};
