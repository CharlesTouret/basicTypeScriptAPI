import {
  GetActivitiesOutput,
  GetActivityAvaibilitiesOutput,
} from '../routes/validationSchemas/activity';

const getAllActivities = async (): Promise<GetActivitiesOutput> => {
  // #TODO: we must request SupaBase and use Harshata to retrieve the data
  const fakeResponse = [
    {
      activityid: 1,
      activityname: 'test',
      productid: 'test',
      clientid: 'test',
      activitydescription: 'test',
      businessaddressline1: 'test',
      businessaddressline2: 'test',
      businessemail: 'test',
      businessphone: 'test',
      Imagepaths: ['test'],
      maxcapacity: 1,
      additionalinformation: 'test',
      activitycancellationpolicy: 'test',
      platformid: 'test',
      activitypricing: 'test',
      tariftypelist: [
        {
          tarifname: 'test',
          description: 'test',
        },
      ],
      activity_daily_organization: [
        {
          dayId: 'test',
          dayName: 'test',
          startOperatingHour: 'test',
          endOperatingHour: 'test',
          startBreakTime: 'test',
          workingDay: 'test',
          breakIndicator: true,
        },
      ],
    },
  ];
  return fakeResponse;
};

const getAvaibilitiesForAnActivity = async (
  activityId: number
): Promise<GetActivityAvaibilitiesOutput> => {
  // #TODO: we must request SupaBase and use Harshata to retrieve the right data
  const fakeResponse = [
    {
      activityid: 12,
      dateid: '2024-10-10',
      timeIntervalId: 'test',
      timeintervaseq: 'test',
      startTime: 'test',
      endTime: 'test',
      bookingStatusId: 'test',
      bookingType: 'test',
      bookingDefinition: 'test',
      productId: 'test',
      clientId: 'test',
    },
  ];
  return fakeResponse;
};

export default {
  getAllActivities,
  getAvaibilitiesForAnActivity,
};
