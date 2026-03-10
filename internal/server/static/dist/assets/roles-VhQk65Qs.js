import{a as e}from"./index-P4nSg7m-.js";/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var r=e("outline","user-plus","IconUserPlus",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M16 19h6",key:"svg-1"}],["path",{d:"M19 16v6",key:"svg-2"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4",key:"svg-3"}]]);const a=`
  query Roles($first: Int, $after: Cursor, $where: RoleWhereInput) {
    roles(first: $first, after: $after, where: $where) {
      edges {
        node {
          id
          name
          scopes
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;export{r as I,a as R};
