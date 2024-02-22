import {z} from 'zod';

export const getActivitiesOutput = z.array(
  z.object({
    activityid: z.number(),
    activityname: z.string(),
    productid: z.string(),
    clientid: z.string(),
    activitydescription: z.string(),
    businessaddressline1: z.string(),
    businessaddressline2: z.string(),
    businessemail: z.string(),
    businessphone: z.string(),
    Imagepaths: z.array(z.string()),
    maxcapacity: z.number(),
    additionalinformation: z.string(),
    activitycancellationpolicy: z.string(),
    platformid: z.string(),
    activitypricing: z.string(),
    tariftypelist: z.array(
      z.object({
        tarifname: z.string(),
        description: z.string(),
      })
    ),
    activity_daily_organization: z.array(
      z.object({
        dayId: z.string(),
        dayName: z.string(),
        startOperatingHour: z.string(),
        endOperatingHour: z.string(),
        startBreakTime: z.string(),
        workingDay: z.string(),
        breakIndicator: z.boolean(),
      })
    ),
  })
);
export type GetActivitiesOutput = z.infer<typeof getActivitiesOutput>;

export const getActivityAvaibilitiesInput = z.object({
  params: z.object({
    activityId: z
      .string()
      .refine(value => !isNaN(Number(value)), {message: 'Invalid number'}),
  }),
});
export type GetActivityAvaibilitiesInput = {
  activityId: string;
};
export const getActivityAvaibilitiesOutput = z.array(
  z.object({
    activityid: z.number(),
    dateid: z.string(),
    timeIntervalId: z.string(),
    timeintervaseq: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    bookingStatusId: z.string(),
    bookingType: z.string(),
    bookingDefinition: z.string(),
    productId: z.string(),
    clientId: z.string(),
  })
);
export type GetActivityAvaibilitiesOutput = z.infer<
  typeof getActivityAvaibilitiesOutput
>;
