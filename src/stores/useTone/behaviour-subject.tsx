export type BehaviorSubscription<T> = { key: string, func: (value: T) => void };
export type BehaviorDisposeFunction = () => void;

export class BehaviourSubject<T = void> {

  private subscriptions: BehaviorSubscription<T>[] = [];

  public next(value: T): void {
    this.subscriptions.forEach(subscription => {
      subscription.func(value);
    });
  }

  public subscribe(func: BehaviorSubscription<T>['func']): BehaviorDisposeFunction {
    const key = Math.random().toString(16).slice(2);

    this.subscriptions.push({ key, func });

    return () => {
      this.subscriptions = this.subscriptions.filter(subscription => subscription.key !== key);
    };
  }
}
