// const removeComment = (state, action) => {
//   const removeChildComment = (childCom, childId) => {
//     childCom.filter((comment) =>{
//       if(comment.id !== childId){
//         return comment;
//       }
//     })
//     state.map((comment) => {
//       if(comment.id === action.payload.parentId){
//         removeChildComment(state.childComments, action.payload.childId);
//       }
//     });
//   }
// }

import { comment } from "postcss";

// const removeChildComment = (childState, action) => {
//     if(childState.childComments){
//         childState.childComments.filter(comment => comment.id !== action.payload.childId)
//     }
// };

const commentReducer = (state, action) => {
    console.log(action, "state name");
    switch (action.type) {
        case "GET_COMMENTS":
            return action.payload;
        case "ADD_COMMENT":
            // eslint-disable-next-line no-case-declarations
            const newState = [
                ...state,
                {
                    comment: action.payload,
                    created_at: "2024-07-12 12:38:43",
                    id: new Date().getTime(),
                    name: "Vesta Schmitt",
                    parent_id: null,
                    post_id: 205,
                    updated_at: "2024-07-12 12:38:43",
                    user_id: 7,
                    childComments: [],
                },
            ];
            return newState;
        case "REMOVE_PARENT_COMMENT":
            return state.filter((comment) => comment.id !== action.payload);
        case "REMOVE_CHILD_COMMENT":
            return state.map((comment) => {
                if (comment.id === action.payload.parentId) {
                    // eslint-disable-next-line no-inner-declarations
                    function removeCildCmnt(cildCmnts) {
                        return cildCmnts.filter((cildCmnt) => {
                            if (cildCmnt.id === action.payload.childId) {
                                return false;
                            } else if (cildCmnt.childComments) {
                                cildCmnt.childComments = removeCildCmnt(
                                    cildCmnt.childComments
                                );
                            }
                            return true;
                        });
                    }
                    return {
                        ...comment,
                        childComments: removeCildCmnt(comment.childComments),
                    };
                }
                return comment;
            });
        case "EDIT_PARENT_COMMENT":
            return state.map((comment) => {
                if (comment.id === action.payload.id) {
                    return {
                        ...comment,
                        comment: action.payload.inputComment,
                    };
                }
                return comment;
            });

        case "EDIT_CHILD_COMMENT":
            console.log(action.payload, "add Payload dfdf")
            return state.map((comment) => {
                if (comment.id === action.payload.parentId) {
                    // eslint-disable-next-line no-inner-declarations
                    function editChildComment(_childComments) {
                        return _childComments.map((childComment) => {
                            if (childComment.id === action.payload.id) {
                                return {
                                    ...childComment,
                                    comment: action.payload.comment,
                                };
                            } else if (childComment.childComments) {
                                return editChildComment(
                                    comment.childComments,
                                    action.payload
                                );
                            }
                            return childComment;
                        });
                    }
                    return {
                        ...comment,
                        childComments: editChildComment(
                            comment.childComments,
                            action.payload
                        ),
                    };
                }
                return comment;
            });

        case "REPLY_PARENT_COMMENT":
            console.log(action.payload, "payload");
            return state.map((comment) => {
                if (comment.id === action.payload.parentId) {
                    return {
                        ...comment,
                        childComments: [
                            ...comment.childComments,
                            {
                                ...action.payload.comment,
                                childComments: [],
                            },
                        ],
                    };
                }
                return comment;
            });

        case "REPLY_CHILD_COMMENT":
            console.log(action.payload);
            return state.map((comment) => {
                if (comment.id === action.payload.parenId) {
                    // eslint-disable-next-line no-inner-declarations
                    function replyChildComment(childComments) {
                        return childComments.map((_childComment) => {
                            if (_childComment.id === action.payload.postId) {
                                return {
                                    ..._childComment,
                                    childComments: [
                                        ..._childComment.childComments,
                                        {
                                            ...action.payload.inputComment,
                                            childComments: [],
                                        },
                                    ],
                                };
                            } else if (_childComment.childComments) {
                                _childComment.childComments = replyChildComment(
                                    _childComment.childComments
                                );
                            }
                            return _childComment;
                        });
                    }

                    return {
                        ...comment,
                        childComments: replyChildComment(comment.childComments),
                    };
                }
                return comment;
            });

        case "SHOW_AND_HIDE_INPUT":
            // eslint-disable-next-line no-case-declarations, no-inner-declarations
            function showAndHideInput(comments) {
                return comments.map((comment) => {
                    if (comment.id === action.payload) {
                        if (!comment.inputShow) {
                            return {
                                ...comment,
                                inputShow: true,
                                childComments: showAndHideInput(
                                    comment.childComments
                                ),
                            };
                        } else {
                            return {
                                ...comment,
                                inputShow: !comment.inputShow,
                                childComments: showAndHideInput(
                                    comment.childComments
                                ),
                            };
                        }
                    } else if (comment.childComments) {
                        return {
                            ...comment,
                            inputShow: false,
                            childComments: showAndHideInput(
                                comment.childComments
                            ),
                        };
                    }
                    return comment;
                });
            }
            return showAndHideInput(state);
        case "SHOW_AND_HIDE_MENU":
            console.log(action.payload, "menu id");
            // eslint-disable-next-line no-case-declarations, no-inner-declarations
            function showAndHideMenu(comments) {
                return comments.map((comment) => {
                    if (comment.id === action.payload) {
                        if (!comment.showMenu) {
                            return {
                                ...comment,
                                showMenu: true,
                                childComments: showAndHideMenu(
                                    comment.childComments
                                ),
                            };
                        } else {
                            return {
                                ...comment,
                                showMenu: !comment.showMenu,
                                childComments: showAndHideMenu(
                                    comment.childComments
                                ),
                            };
                        }
                    } else if (comment.childComments) {
                        return {
                            ...comment,
                            showMenu: false,
                            childComments: showAndHideMenu(
                                comment.childComments
                            ),
                        };
                    } else {
                        return {
                            ...comment,
                            showMenu: false,
                        };
                    }
                });
            }
            return showAndHideMenu(state);
        // eslint-disable-next-line no-duplicate-case
        case "SHOW_EDIT_INPUT":
        // eslint-disable-next-line no-case-declarations, no-inner-declarations
        function showInput(comments) {
            return comments.map((comment) => {
                if (comment.id === action.payload) {
                    return {
                        ...comment,
                        showEditInput: !comment.showEditInput,
                    };
                } else if (comment.childComments) {
                    return {
                        ...comment,
                        showEditInput: false,
                        childComments: showInput(comment.childComments),
                    };
                }
                return comment;
            });
        }
        return showInput(state);
        default:
            return state;
    }
};

export default commentReducer;
