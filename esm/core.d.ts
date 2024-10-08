import type { ECharts } from 'echarts';
import { PureComponent } from 'react';
import { EChartsReactProps } from './types';
/**
 * core component for echarts binding
 */
export default class EChartsReactCore extends PureComponent<EChartsReactProps> {
    /**
     * echarts render container
     */
    ele: HTMLElement;
    /**
     * if this is the first time we are resizing
     */
    private isInitialResize;
    /**
     * echarts library entry
     */
    protected echarts: any;
    constructor(props: EChartsReactProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: EChartsReactProps): void;
    componentWillUnmount(): void;
    initEchartsInstance(): Promise<ECharts>;
    /**
     * return the existing echart object
     */
    getEchartsInstance(): ECharts;
    /**
     * dispose echarts and clear size-sensor
     */
    private dispose;
    /**
     * render a new echarts instance
     */
    private renderNewEcharts;
    private bindEvents;
    /**
     * render the echarts
     */
    private updateEChartsOption;
    /**
     * resize wrapper
     */
    private resize;
    render(): JSX.Element;
}
