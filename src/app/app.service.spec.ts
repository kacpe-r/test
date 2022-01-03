import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { AppService } from './app.service';

describe('AppService', () => {
  let httpTestingController: HttpTestingController;
  let service: AppService;
  let mockValidator: jasmine.SpyObj<AppService>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AppService
    // {provide: AppService, useValue: jasmine.createSpyObj('AppService', ['getData']).withArgs({}).and.returnValue(of('mock data result'))}
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(AppService);
    mockValidator = TestBed.get(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created2', (done) => {

    // mockValidator.getData.isValid.and.returnValue(true)
    mockValidator.getData().subscribe(data => {
      const xxx = {
        feed_data: {
            events: [
                {
                    utc_date: 1640632609.29088,
                    event_type: 'sale',
                    items: [
                        {
                            art_url: 'https://f4.bcbits.com/img/a1920544641_7.jpg',
                            amount_paid: 3.0,
                            currency: 'EUR',
                            item_description: 'iO (Mulen) - Cheated Song',
                            slug_type: 't',
                            releases: null,
                            country_code: 'gb',
                            amount_paid_usd: 3.4,
                            package_image_id: null,
                            artist_name: 'iO (Mulen)',
                            utc_date: 1640632609.86721,
                            item_type: 't',
                            album_title: 'Bandcamp Exclusive 2',
                            track_album_slug_text: null,
                            art_id: 1920544641,
                            amount_paid_fmt: '€3',
                            url: '//iomulen.bandcamp.com/track/io-mulen-cheated-song',
                            item_price: 3.0,
                            country: 'United Kingdom'
                        }
                    ]
                }
            ],
            end_date: 1640632680,
            start_date: 1640632080,
            data_delay_sec: 120,
            server_time: 1640632738
        }
      }
      expect(data).toEqual(xxx)
      const getData = mockValidator.getData()
      console.log(getData, 4444)
      done();

    })
  });
});
