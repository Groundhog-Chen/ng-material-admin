import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Charging } from '../../@core/types/dashboard';
import { Router, Routes } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges, OnDestroy {

    constructor(private router: Router) { }

    chargings: Charging[] = [
        {
            name: '',
            className: '',
            id: 0
        },
        {
            name: '充电中',
            className: 's1',
            id: 1
        },
        {
            name: '已关闭',
            className: 's2',
            id: 2
        },
        {
            name: '未支付',
            className: 's3',
            id: 3
        },
        {
            name: '已支付',
            className: 's4',
            id: 4
        },
        {
            name: '退款中',
            className: 's3',
            id: 5
        },
        {
            name: '退款失败',
            className: 's3',
            id: 6
        },
        {
            name: '退款成功',
            className: 's4',
            id: 7
        },
        {
            name: '待结算',
            className: 's3',
            id: 8
        },
        {
            name: '未知',
            className: 's3',
            id: 9
        }
    ];
    count = 0;
    ngOnInit() {
        // console.log(this.router);
    }
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }
    ngOnDestroy(): void {
        console.log('OnDestroy');
    }

    clickA() {
        this.count += 1;
        this.chargings = [
            {
                name: 'name' + this.count,
                className: 's1',
                id: 1
            }
        ];
        // this.chargings.push({
        //     name: 'name' + this.count,
        //     className: 's1',
        //     id: 1
        // });
    }
}
