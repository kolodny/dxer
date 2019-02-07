interface Action { readonly type: string }

interface ActionClass<T extends Action> {
  new(...args: any): T
}

const map = new Map<ActionClass<any>, string>();
export const register = <T extends Action>(actionClass: ActionClass<T>) => {
  if (map.has(actionClass)) {
    throw new Error(`Class ${actionClass.name} already registered`);
  }
  const type = new actionClass().type;
  map.set(actionClass, type);
}

export const getType = <T extends Action>(actionClass: ActionClass<T>) => {
  if (!map.has(actionClass)) {
    throw new Error(`Can't find action type for Class ${actionClass.name}`);
  }
  return map.get(actionClass);
}
